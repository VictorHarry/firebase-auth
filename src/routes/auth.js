import { Router as expressRouter } from 'express';

const router = expressRouter();

router.post('/signIn', async (req, res) => {
    const app = req.app;
    const firebase = app.get("firebase");
    var email = req.body.email;
    var password = req.body.password;
    try {
        const resp = await firebase.auth().signInWithEmailAndPassword(email, password)
        return res.status(201).send(`User ${resp.user.email} logged!`);
    } catch (error) {
        return res.status(200).send(error.message);
    }
})

router.post('/signUp', async (req, res) => {
    const app = req.app;
    const firebase = app.get("firebase");
    var email = req.body.email;
    var password = req.body.password;
    try {
        const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
        return res.status(201).send(`User ${resp.user.email} registered!`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

router.get('/authState', async (req, res) => {
    const app = req.app;
    const firebase = app.get("firebase");
    var user = firebase.auth().currentUser;

    if (user) {
        return res.status(200).send(true);
    }

    return res.status(200).send(false);
})

export { router as authRouter };