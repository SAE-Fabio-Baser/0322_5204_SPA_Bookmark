import { OAuth2Client } from "google-auth-library";
import { Bookmark } from "./models/index.js";

function loggedIn(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.json({ code: "noAuthHeader" });
    return;
  }

  const [bearerType, token] = authorization.split(" ");

  if (bearerType !== "Bearer") {
    res.json({ code: "authHeaderMustBeBearer" });
    return;
  }

  const auth = new OAuth2Client();

  auth
    .verifyIdToken({
      idToken: token,
    })
    .then((loginTicket) => {
      console.log(loginTicket);
      req.body.user = loginTicket.payload;
      next();
    })
    .catch((error) => {
      res.send({ code: "invalidToken" });
    });
}

function routes(app) {
  app.get("/api/bookmarks", loggedIn, async (req, res) => {
    const bookmarks = await Bookmark.find();
    res.json({ code: "success", data: bookmarks });
  });

  app.post("/api/bookmarks/create", loggedIn, async (req, res) => {
    const { name, externalUrl, creator } = req.body;

    const bookmark = new Bookmark({
      creator,
      name,
      favorite: false,
      externalUrl,
      createdAt: Date.now(),
    });

    bookmark
      .save()
      .then((r) => res.json(r))
      .catch((err) => {
        res.sendStatus(500);
        console.error(err);
      });
  });
}

export default routes;