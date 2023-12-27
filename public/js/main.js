new Vue({
  el: "#app",
  data: {
    fullname: "",
    email: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
    cell: "",
    dbo: "",
    occupation: "",
  },
  methods: {
  	async sendApplication(){
  		// e.preventDefault();
  		if(!this.fullname || !this.email || !this.address || !this.state || !this.city || !this.zipcode || !this.cell || !this.dbo || !this.occupation)
  			return alert("All inputs are required");
  		const data = {
  			fullname: this.fullname,
  			email: this.email,
  			address: this.address,
  			state: this.state,
  			city: this.city,
  			zipcode: this.zipcode,
  			cell: this.cell,
  			dbo: this.dbo,
  			occupation: this.occupation,
  		}

  		try{
  			axios.post("https://alfac-tech.cyclic.app/apply",data)
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
