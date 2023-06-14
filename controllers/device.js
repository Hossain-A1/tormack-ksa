const Device = require("../models/device");
const os = require("os");
const useragent = require("express-useragent");

const getDevice = async (req, res) => {
  try {
    const { userId } = req.params;
    if (userId !== req.user?._id.toString()) {
      throw Error("Invalid userId.");
    }

    const deviceData = {
      ipAddress: getIp(req),
      hostname: os.hostname(),
      os: getOs(req),
      userAgent: req.headers["user-agent"],
      user: userId,
    };

    const user = await Device.create(deviceData);
    if (!user) {
      throw Error("User not found.");
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

function getIp(req) {
  const ip = req.headers["x-forward-for"] || req.connection.remoteAddress;
  return ip;
}

function getOs(req) {
  const useragentStr = req.headers["user-agent"];
  const userAgent = useragent.parse(useragentStr);
  return userAgent.os;
}

module.exports = getDevice;
