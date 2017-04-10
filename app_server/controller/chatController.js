var mongoose = require('mongoose');
var Chat = mongoose.model('Chat');
var Message = mongoose.model('Message');
var User = mongoose.model('User');

module.exports userChat = function(req, res) {
    console.log(req.method, req.url);
    Chat.find({
        user: req.query.user
    }, function(err, chat) {
        if (err) {
            User.find({ admin: true }, function(err, users) {
                var chat = new Chat()
                chat.user = req.query.id
                chat.admin = users[0]._id

                var msg = new Message()
                msg.text = req.body.text
                msg.user = req.query.id
                chat.messages.push(msg)
                msg.save(function(err) {
                    if (err) {
                        res.send(err);
                    }
                    chat.save(function(err) {
                        if (err) {
                            res.send(err);
                        }
                        res.json({ message: 'new Chat message sent to admin' });
                    });
                });
            });
        } else {
            var msg = new Message()
            msg.text = req.body.text
            msg.user = req.query.id
            chat.messages.push(msg)
            msg.save(function(err) {
                if (err) {
                    res.send(err);
                }
                chat.save(function(err) {
                    if (err) {
                        res.send(err);
                    }
                    res.json({ message: 'new Chat message sent to admin' });
                });
            });
        }
    })
};
module.exports userChatget = function(req, res) {
    Chat.find({
        user: req.query.user
    }, function(err, chat) {
        if (err) {
            res.send(err);
        }
        res.json(chat);
    })
};


module.exports adminChat = function(req, res) {
    Chat.find({
        user: req.query.user,
        admin: req.query.admin
    }, function(err, chat) {
        if (err) {
            var chat = new Chat()
            chat.user = req.query.id
            chat.admin = req.query.admin

            var msg = new Message()
            msg.text = req.body.text
            msg.user = req.query.admin
            chat.messages.push(msg)
            msg.save(function(err) {
                if (err) {
                    res.send(err);
                }
                chat.save(function(err) {
                    if (err) {
                        res.send(err);
                    }
                    res.json({ message: 'new Chat message sent from admin to user' });
                });
            });
        } else {
            var msg = new Message()
            msg.text = req.body.text
            msg.user = req.query.admin
            chat.messages.push(msg)
            msg.save(function(err) {
                if (err) {
                    res.send(err);
                }
                chat.save(function(err) {
                    if (err) {
                        res.send(err);
                    }
                    res.json({ message: 'new Chat message sent from admin to user' });
                });
            });
        }
    })
};

module.exports adminChatget = function(req, res) {
    Chat.find({
        user: req.query.user,
        admin = req.query.admin
    }, function(err, chat) {
        if (err) {
            res.send(err);
        }
        res.json(chat);
    })
};

module.exports adminChatgetAll = function(req, res) {
    Chat.find({
        admin = req.query.admin
    }, function(err, chat) {
        if (err) {
            res.send(err);
        }
        res.json(chat);
    })
};
