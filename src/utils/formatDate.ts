export default function formatDate(date: Date | string = ""): string {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (date instanceof Date) {
    return date.toLocaleDateString("id-US", options);
  } else {
    return new Date(date).toLocaleDateString("id-US", options);
  }
}
