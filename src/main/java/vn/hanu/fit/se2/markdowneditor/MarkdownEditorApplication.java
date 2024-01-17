package vn.hanu.fit.se2.markdowneditor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Connection;
import java.sql.DriverManager;

@SpringBootApplication
public class MarkdownEditorApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarkdownEditorApplication.class, args);
	}
}
