const Name = require("./model");

exports.createName = async (req, res) => {
  console.log(req.body, "createName");
  try {
    const post = await new Name(req.body);
    await post.save();
    res.status(200).json({ post });
  } catch (error) {
    res.status(400).json({ error });
  }
};
