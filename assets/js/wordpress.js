const WordPressAPI = {
  baseURL: "http://172.16.2.102:8000/wp-json",
  
  getSiteInfo: async function() {
    try {
      const res = await fetch(this.baseURL);
      return await res.json();
    } catch (err) {
      console.log("WP ERROR:", err);
      return null;
    }
  }
  getLogo: async function() {
  try {
    const res = await fetch(this.baseURL);
    const data = await res.json();
    
    return data.site_icon_url || null;
  } catch (err) {
    console.log("Logo Error:", err);
    return null;
  }
}
};

