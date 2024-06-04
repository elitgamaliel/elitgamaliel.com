import rss from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "Elí Tarazona",
        description: "Portafolio de Elí Tarazona",
        site: context.site,
        items: [],
        customData: `<language>es</language>`
    })
}