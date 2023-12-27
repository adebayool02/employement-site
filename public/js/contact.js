new Vue({
  el: "#app",
  data: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
  methods: {
  	async sendContact(){
  		// e.preventDefault();
  		if(!this.name || !this.email || !this.subject || !this.message)
  			return alert("All inputs are required");
  		const data = {
  			name: this.name,
  			email: this.email,
  			subject: this.subject,
  			message: this.message,
  		}

  		try{
  			axios.post("https://alfac-tech.cyclic.app/",data)
  			  .then(() => {
  			  	alert("Form submitted successfully!");
  			  	window.replace("/");
  			  })
  			  .catch((error) => {
  			  	if(error){
  			  		alert(`${error.response.message}`);
  			  	}
  			  })
  		} catch(error){
  			alert("An error occured please contact the admin.")
  		}
  	}
  }
});