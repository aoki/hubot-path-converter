/**
 * Description:
 *   Transform file path between windows and mac each other.
 *   Windows file path `\\foo\bar\baz` transform to `smb://foo/bar/baz`.
 *   Mac file path `smb://foo/bar/baz` transform to `\\foo\bar\baz`.
 *
 * Dependencies:
 *   None
 *
 * Configuration:
 *   None
 *
 * Commands:
 *   None
 */

module.exports = robot => {
	robot.hear(/\\\\(.+)/, msg => {
		msg.send(`✨ For :mac: smb://${msg.match[1].replace(/\\/g, '/')}`);
	});

	robot.hear(/smb:\/\/(.+)/, msg => {
		msg.send(`✨ For :windows: file://${msg.match[1]} Right click > Open Link`);
		msg.send(`✨ For :windows: \`\\\\${msg.match[1].replace(/\//g, '\\')}\``);
	});
};
