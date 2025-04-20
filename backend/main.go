package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

func main() {
	r := gin.Default()

	// CORS
	//r.Use(cors.Default())

	// 静的ファイル
	r.Static("/assets", "./assets")

	// API
	r.GET("/users", func(c *gin.Context) {
		users := []User{
			{ID: 1, Name: "Alice"},
			{ID: 2, Name: "Bob"},
			{ID: 3, Name: "Charlie"},
		}
		c.JSON(http.StatusOK, users)
	})

	r.NoRoute(func(c *gin.Context) {
		c.File("./static/index.html")
	})
	r.Run(":8080")
}
