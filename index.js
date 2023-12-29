const Canvas = require("canvas");
// Register Bold font
Canvas.registerFont(`${__dirname}/assets/fonts/theboldfont.ttf`, { family: "Bold" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/SketchMatch.ttf`, { family: "SketchMatch" });
// Register SketchMatch font
Canvas.registerFont(`${__dirname}/assets/fonts/LuckiestGuy-Regular.ttf`, { family: "luckiest guy" });
// Register KeepCalm font
Canvas.registerFont(`${__dirname}/assets/fonts/KeepCalm-Medium.ttf`, { family: "KeepCalm" });

module.exports.Base = require('./src/greetings/Base');
module.exports.Lickanime = require('./src/linz/Lick');
module.exports.Burnsp = require('./src/linz/Burn');
module.exports.Welcome = require('./src/greetings/Welcome');
module.exports.Goodbye = require('./src/greetings/Goodbye');
module.exports.Promote = require('./src/greetings/Promote');
module.exports.Demote = require('./src/greetings/Demote');
module.exports.Verification = require('./src/greetings/Verification');

