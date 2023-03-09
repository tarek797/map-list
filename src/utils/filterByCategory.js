export default function filterByCategory(
  category,
  isFiltered,
  setEventsData,
  setIsFiltered,
  importedEventsData
) {
  setEventsData(importedEventsData);

  if (category === "A") {
    if (!isFiltered.A) {
      setEventsData((prev) =>
        prev.filter((event) => event.category === category)
      );
      setIsFiltered((prev) => ({ ...prev, A: true }));
    } else {
      setIsFiltered((prev) => ({ ...prev, A: false }));
    }
  } else if (category === "B") {
    if (!isFiltered.B) {
      setEventsData((prev) =>
        prev.filter((event) => event.category === category)
      );
      setIsFiltered((prev) => ({ ...prev, B: true }));
    } else {
      setIsFiltered((prev) => ({ ...prev, B: false }));
    }
  }
}