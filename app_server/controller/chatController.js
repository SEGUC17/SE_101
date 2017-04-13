var mongoose = require('mongoose');
var User = mongoose.model('User');
var Message = mongoose.model('Message');
var Chat = mongoose.model('Chat');

module.exports.userChat = function(req, res) {
    console.log(req.method, req.url);
    Chat.find({
        user: req.query.id
    }, function(err, c) {
        if (!c.user) {
            User.find({ admin: true }, function(err, users) {
                if (users != []) {
                    var c = new Chat()
                    c.user = req.query.id
                    c.admin = users[0]._id

                    var msg = new Message()
                    msg.text = req.body.text
                    msg.user = req.query.id
                    c.messages = [msg]
                    msg.save(function(err) {
                        if (err) {
                            res.send("can't save msg ", err);
                        }
                        c.save(function(err, chat) {
                            if (err) {
                                res.send(err);
                            }
                            res.send(chat);
                        });
                    });
                } else {
                    res.json({ message: 'cant find admin' });
                }
            });
        } else {
            var msg = new Message()
            msg.text = req.body.text
            msg.user = req.query.id
            c.messages = [].push(msg)
            msg.save(function(err) {
                if (err) {
                    res.send("can't save msg ", err);
                }
            });
            c.save(function(err) {
                if (err) {
                    res.send("can't save chat ", err);
                }
                res.json({ message: 'new Chat message sent to admin' });
            });
        }
    })
};
module.exports.userChatget = function(req, res) {
    Chat.find({
        user: req.query.id
    }, function(err, chat) {
        if (err) {
            res.send(err);
        }
        res.json(chat);
    })
};


module.exports.adminChat = function(req, res) {
    Chat.find({
        user: req.query.user,
        admin: req.query.admin
    }, function(err, chat) {
        if (!chat.user) {
            var chat = new Chat()
            chat.user = req.query.id
            chat.admin = req.query.admin

            var msg = new Message()
            msg.text = req.body.text
            msg.user = req.query.admin
            chat.messages = [].push(msg)
            msg.save(function(err) {
                if (err) {
                    res.send(err);
                }
                chat.save(function(err, chat) {
                    if (err) {
                        res.send(err);
                    }
                    res.send(chat);
                });
            });
        } else {
            var msg = new Message()
            msg.text = req.body.text
            msg.user = req.query.admin
            chat.messages = [].push(msg)
            msg.save(function(err) {
                if (err) {
                    res.send(err);
                }
            });
            chat.save(function(err, chat) {
                if (err) {
                    res.send(err);
                }
                res.send(chat);
            });
        }
    })
};

module.exports.adminChatget = function(req, res) {
    Chat.find({
        user: req.query.user,
        admin: req.query.admin
    }, function(err, chat) {
        if (err) {
            res.send(err);
        }
        res.json(chat);
    })
};

module.exports.adminChatgetAll = function(req, res) {
    Chat.find({
        admin: req.query.admin
    }, function(err, chat) {
        if (err) {
            res.send(err);
        }
        res.json(chat);
    })
};
