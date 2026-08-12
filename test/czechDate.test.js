import { describe, test, expect } from "vitest";
import { czechDate } from "../index.js";

describe("czechDate", () => {

    // =========================
    // GENITIV
    // =========================

    test("genitiv - D", () => {
        expect(czechDate("genitiv", "D", "15. 6. 2029"))
            .toBe("15. ");
    });

    test("genitiv - M", () => {
        expect(czechDate("genitiv", "M", "15. 6. 2029"))
            .toBe("června");
    });

    test("genitiv - Y", () => {
        expect(czechDate("genitiv", "Y", "15. 6. 2029"))
            .toBe("2029");
    });

    test("genitiv - DM", () => {
        expect(czechDate("genitiv", "DM", "15. 6. 2029"))
            .toBe("15. června");
    });

    test("genitiv - MY", () => {
        expect(czechDate("genitiv", "MY", "15. 6. 2029"))
            .toBe("června 2029");
    });

    test("genitiv - DMY", () => {
        expect(czechDate("genitiv", "DMY", "15. 6. 2029"))
            .toBe("15. června 2029");
    });


    // =========================
    // NOMINATIV
    // =========================

    test("nominativ - D", () => {
        expect(czechDate("nominativ", "D", "15. 6. 2029"))
            .toBe("15. ");
    });

    test("nominativ - M", () => {
        expect(czechDate("nominativ", "M", "15. 6. 2029"))
            .toBe("červen");
    });

    test("nominativ - Y", () => {
        expect(czechDate("nominativ", "Y", "15. 6. 2029"))
            .toBe("2029");
    });

    test("nominativ - DM", () => {
        expect(czechDate("nominativ", "DM", "15. 6. 2029"))
            .toBe("15. červen");
    });

    test("nominativ - MY", () => {
        expect(czechDate("nominativ", "MY", "15. 6. 2029"))
            .toBe("červen 2029");
    });

    test("nominativ - DMY", () => {
        expect(czechDate("nominativ", "DMY", "15. 6. 2029"))
            .toBe("15. červen 2029");
    });


    // =========================
    // LOCATIV
    // =========================

    test("locativ - D", () => {
        expect(czechDate("lokativ", "D", "15. 6. 2029"))
            .toBe("15. ");
    });

    test("locativ - M", () => {
        expect(czechDate("lokativ", "M", "15. 6. 2029"))
            .toBe("červnu");
    });

    test("locativ - Y", () => {
        expect(czechDate("lokativ", "Y", "15. 6. 2029"))
            .toBe("2029");
    });

    test("locativ - DM", () => {
        expect(czechDate("lokativ", "DM", "15. 6. 2029"))
            .toBe("15. červnu");
    });

    test("locativ - MY", () => {
        expect(czechDate("lokativ", "MY", "15. 6. 2029"))
            .toBe("červnu 2029");
    });

    test("locativ - DMY", () => {
        expect(czechDate("lokativ", "DMY", "15. 6. 2029"))
            .toBe("15. červnu 2029");
    });


    // =========================
    // RŮZNÉ DÉLKY DNE A MĚSÍCE
    // =========================

    test("jednociferný den", () => {
        expect(czechDate("genitiv", "DMY", "5. 6. 2029"))
            .toBe("5. června 2029");
    });

    test("dvouciferný den", () => {
        expect(czechDate("genitiv", "DMY", "15. 6. 2029"))
            .toBe("15. června 2029");
    });

    test("jednociferný měsíc", () => {
        expect(czechDate("genitiv", "DMY", "15. 6. 2029"))
            .toBe("15. června 2029");
    });

    test("dvouciferný měsíc", () => {
        expect(czechDate("genitiv", "DMY", "15. 12. 2029"))
            .toBe("15. prosince 2029");
    });


    // =========================
    // VÝCHOZÍ PARAMETRY
    // =========================

    test("výchozí formát je DMY a výchozí pád je genitiv", () => {
        expect(czechDate("genitiv", "DMY", "15. 6. 2029"))
            .toBe("15. června 2029");
    });

     // =========================
    // Různé formáty datumu
    // =========================

    test("vstupní datum neobsahuje mezery za čísly", () => {
        expect(czechDate("genitiv", "DMY", "15.6.2029"))
            .toBe("15. června 2029");
    });

    test("americký formát datumu a času YYYY-MM-DD genitiv", () => {
        expect(czechDate("genitiv", "DMY", "2029-06-15"))
            .toBe("15. června 2029");
    });

    test("americký formát datumu a času YYYY-MM-DD - nominativ", () => {
        expect(czechDate("nominativ", "DMY", "2029-06-15"))
            .toBe("15. červen 2029");
    });

    test("americký formát datumu a času YYYY-MM-DD - lokativ", () => {
        expect(czechDate("lokativ", "DMY", "2029-06-15"))
            .toBe("15. červnu 2029");
    });

       // =========================
    // Různé počty parametrů
    // =========================

     test("funkce pouze s parametrem pádu", () => {
        const today = new Date().toLocaleDateString();

    expect(czechDate("lokativ"))
        .toBe(czechDate("lokativ", "DMY", today));
    });

   test("funkce s parametrem pádu a formátem výpisu", () => {
    const today = new Date().toLocaleDateString();

    expect(czechDate("lokativ", "MY"))
        .toBe(czechDate("lokativ", "MY", today));
    });

});