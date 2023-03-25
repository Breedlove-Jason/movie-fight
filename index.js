// Here is your key: 315ed2b
// Please append it to all of your API requests,
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=315ed2b

const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "315ed2b",
      s: searchTerm,
    },
  });
  console.log(response.data);
};

const input = document.querySelector("input");

let timeoutId;
const onInput = event => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 500);
};
input.addEventListener("input", onInput);
