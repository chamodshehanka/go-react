package main

import (
	"fmt"	
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func homeLink(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome back!")
}

func main(){
	fmt.Println("Hello World")
}