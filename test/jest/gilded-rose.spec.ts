import { GildedRose, Item } from '@/gilded-rose'

describe("Gilded Rose", () => {
  it.skip("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });
});
