<?php

class Connection
{
	protected $dbname = 'zeroone';
	private $server;
	function __construct()
	{
		$lines = file('../' . '.env', FILE_IGNORE_NEW_LINES);
		foreach ($lines as $line)
			if (strpos($line, 'DB_DATABASE') !== false)
				$this->dbname = substr($line, strpos($line, "=") + 1);
		$this->server = "mysql:host=localhost;dbname=" . $this->dbname . ";charset=utf8mb4";
	}


	private $username = "root";
	private $password = "usbw";
	//private $password = "usbw";
	private $options  = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,);
	protected $conn;

	public function open()
	{
		try {
			$this->conn = new PDO($this->server, $this->username, $this->password, $this->options);
			return $this->conn;
		} catch (PDOException $e) {
			echo "There is some problem in connection: " . $e->getMessage();
		}
	}

	public function close()
	{
		$this->conn = null;
	}
}
