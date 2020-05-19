require("babel-register")({
    presets: ["es2015", "react"]
});

const router = require("./App").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
        new Sitemap(router)
            .build("https://www.irufit.com")
            .save("../public/sitemap.xml")
    );
}

generateSitemap();