package main

import (
	"github.com/gin-contrib/cors"
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
	r.Use(cors.Default())

	// API
	r.GET("/users", func(c *gin.Context) {
		users := []User{
			{ID: 1, Name: "Alice"},
			{ID: 2, Name: "Bob"},
			{ID: 3, Name: "Charlie"},
		}
		c.JSON(http.StatusOK, users)
	})

	r.Run(":8080")
}
