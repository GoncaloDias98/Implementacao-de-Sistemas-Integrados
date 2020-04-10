module.exports = {

	usernameExists(username, callback) {

		var sql = "SELECT * FROM users WHERE username=?";
		global.connection.query(sql, [username], function (error, rows, fields) {
			if (error) throw error;
			if (rows.length == 1 && rows[0].username === username) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},

	create(data, callback) {
		var sql = "INSERT INTO users (username, name, email, password, email_part) VALUES (?,?,?,?,?)";
		global.connection.query(
			sql, [data.password, data.name, data.numero, data.username, data.email],
			function (error, rows, fields) {
				if (error) throw error;
				callback(rows[0]);
			});
	},
	
	emailExists(email, callback) {

		var sql = "SELECT * FROM users WHERE email=?";
		global.connection.query(sql, [email], function (error, rows, fields) {
			if (error) throw error;
			if (rows.length == 1 && rows[0].email === email) {
				callback(true);
			} else {
				callback(false);
			}
		});
	}

}