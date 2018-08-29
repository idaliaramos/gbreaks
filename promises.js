This is how to refactor to async await

//handle submit will take the information and
// _handleSubmit = event => {
//   event.preventDefault();
//   let user = localStorage.getItem("name");
//   let content = this.state.content;
//   let docInfo = {
//     issuer: user,
//     content: content
//   };
//   return fetch(`https://aachallengeone.now.sh/update/${this.state.name}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(docInfo)
//   }).then(response => response.json()).catch(err => {
//   this.setState({isSuccessful: false})
//   });
// };

_handleSubmit = async event => {
  event.preventDefault();
  let user = localStorage.getItem("name");
  let content = this.state.content;
  let docInfo = {
    issuer: user,
    content: content
  };
  try {
    const response = await fetch(
      `https://aachallengeone.now.sh/update/${this.state.name}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ docInfo })
      }
    );
  } catch (e) {
    this.setState({ isSuccessful: false });
  }
};
