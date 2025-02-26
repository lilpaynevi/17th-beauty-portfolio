import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
  let browser;

  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(
      "https://www.fresha.com/fr/a/17th-beauty-paris-196-boulevard-malesherbes-jz16s08j/booking?pId=1466056",
      { waitUntil: "networkidle2", timeout: 30000 }
    );

    await page.setViewport({
      width: 2920,
      height: 2080,
      deviceScaleFactor: 0.001,
    });

    await page.evaluate(() => {
      document.body.style.transform = "scale(0.05)"; 
      document.body.style.transformOrigin = "0 0";
      document.documentElement.style.overflow = "hidden"; 
    });

    await page.waitForSelector('[data-testid="virtuoso-item-list"]');

    const services = await page.evaluate(() => {
      const results = [];
      const container = document.querySelector(
        '[data-testid="virtuoso-item-list"]'
      );

      container.querySelectorAll("[data-item-index]").forEach((item) => {
        const categoryElement = item.querySelector('.font-default-header-s-semibold');
        console.log("🚀 ~ container.querySelectorAll ~ categoryElement:", categoryElement)
        const category = categoryElement
          ? categoryElement.innerText.trim()
          : "Sans catégorie";

        const name = item
          .querySelector('[data-qa="offer-item-name"]')
          ?.innerText.trim();
        const duration = item
          .querySelector('[data-qa="offer-item-caption"]')
          ?.innerText.trim();
        const price = item
          .querySelector('[data-qa="offer-item-price"]')
          ?.innerText.trim();
        const description = item
          .querySelector('[data-qa="offer-item-description"]')
          ?.innerText.trim();

          
        if (name && duration && price) {
          results.push({
            category,
            name,
            duration,
            price,
            description: description || "Aucune description disponible",
          });
        }
      });

      return results;
    });

    await browser.close();

    return NextResponse.json(
      {
        success: true,
        services,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Erreur lors du scraping :", error);

    if (browser) {
      await browser.close();
    }

    return NextResponse.json(
      {
        success: false,
        error: "Erreur lors du scraping des services",
      },
      {
        status: 500,
      }
    );
  }
}
