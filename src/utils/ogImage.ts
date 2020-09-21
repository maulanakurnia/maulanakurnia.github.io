import { MDXFrontMatter } from "*.mdx";
import { createCanvas } from "canvas";
import { existsSync, promises as fs } from "fs";
import path from "path";
import siteConfig from "config/siteconfig.json";

const { mkdir, writeFile } = fs;

// This function takes a canvas, string, and maxwidth to determine
// how to split the subject string based on its rendered length,
// allowing text to wrap in the canvas
function getLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  // TODO: Add non-space punctuation to getLines for splitting
  // Currently splitting just happens on spaces, but should probably
  // also apply to e.g. hyphens
  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

export default function ogImage(
  title: string,
  callback?: (e: unknown, b: Buffer) => void
): Buffer | void {
  const displaySize = 80;
  const lineHeight = displaySize * 1;
  const authorSize = 36;
  const [width, height] = [1200, 1200];
  const [halfWidth, halfHeight] = [width / 2, height / 2];
  const textWidth = 1022;
  const offset = 66;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Render the background colour
  ctx.fillRect(0, 0, width, height);

  // Render the blog post title
  ctx.font = `bold ${displaySize}px Soehne`;
  ctx.textAlign = "left";

  const lines = getLines(ctx, title, textWidth);
  const textHeight = lines.length * lineHeight;

  // Mapping over the lines rather than .join("\n")-ing them allows us
  // to use a custom "line height"
  lines.map((line, i) => {
    const y = halfHeight - textHeight / 2 + lineHeight * i + lineHeight / 3;
    ctx.fillText(line, offset, y);
  });

  // Render the site title, assuming the main text isn't equal to it
  if (title !== siteConfig.title) {
    ctx.font = `${authorSize}px National 2`;

    ctx.translate(width - offset, halfHeight);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText(siteConfig.title, 0, 0);
    ctx.resetTransform();
    ctx.restore();
  }

  if (callback) {
    return canvas.toBuffer(callback);
  }

  return canvas.toBuffer("image/png");
}

export const generateOgImages = async (posts: MDXFrontMatter[]) => {
  const dir = path.resolve("public", "og");

  if (!existsSync(dir)) {
    await mkdir(dir);
  }

  const promises = posts.map(({ title, ogSlug }, index) => {
    return new Promise((resolve, reject) => {
      const filepath = path.resolve(dir, `${ogSlug?.split(".png")[0]}.png`);

      ogImage(title, (error, buffer) => {
        if (error) {
          console.error(error);
          reject();
        }

        writeFile(filepath, buffer);
      });

      resolve();
    });
  });

  await Promise.all(promises).catch((error) => console.error(error));
};
