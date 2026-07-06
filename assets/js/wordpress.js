const WordPressAPI = {
  
  baseURL: "http://127.0.0.1:8000/wp-json",
  
  // 1. معلومات الموقع
  getSiteInfo: async function() {
    try {
      const res = await fetch(this.baseURL);
      return await res.json();
    } catch (err) {
      console.log("SiteInfo Error:", err);
    }
  }
  
};