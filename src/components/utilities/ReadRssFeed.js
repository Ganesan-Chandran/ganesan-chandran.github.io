export const readRssFeed = async (rss_feed_url) => {
  let data = await fetch(rss_feed_url)
    .then(handleErrors)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      const items = data.querySelectorAll("item");
      return items.length;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });

  return data;
}

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.status + " - " + response.statusText);
  }
  return response;
}