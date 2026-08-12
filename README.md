# Czechdate - datumy s českými názvy měsíců

Jednoduchá npm knihovna pro výpis datumů s českými názvy měsíců **se zaměřením na správné skloňování**. Umí pracovat jak s českým formátem datumu (dd-mm-yyyy) tak i s americkým (yyyy-mm-dd), jež najdeme ve většině databázových systémů či ve výsledcích dotazů na nějakou API.

## Instalace

`npm install czechdate`

## Použití

```js 
import { czechDate } from "czechdate"
```

## Práce s funkcí

```js 
czechDate(pád?: string, formát?: string, vstupní datum?: string): string | undefined
```
### Pád
 nominativ (*leden*), genitiv (*ledna*), lokativ (*lednu*)

### Formát
Výchozí formát je DMY

**D** *(1.)*, **M** *(leden)*, **Y** *(2026)*, **DM** *(1. leden)*, **MY** *(leden 2026)*, **DMY** *(1. leden 2026)*

### Výchozí vstupní datum
Funkce bez parametrů vypíše aktuální datum

```js 
czechDate() //aktuální datum ve formátu 15. června 2029
```

### Vstupní datum a výstupy

```js 
czechDate("genitiv", "DMY", "15.6.2029") // 15. června 2029
czechDate("nominativ", "MY", "15.6.2029") // červen 2029
czechDate("lokativ", "M", "15.6.2029") // červnu
```

```js 
czechDate("genitiv") // aktuální datum ve formátu 15. června 2029
czechDate("nominativ") // aktuální datum ve formátu 15. červen 2029
czechDate("nominativ", "MY") // aktuální datum ve formátu června 2029
```
Americký formát datumu:
```js 
czechDate("genitiv", "DMY", "2029-06-15") // 15. června 2029
czechDate("nominativ", "MY", "2029-06-15") // červen 2029
czechDate("lokativ", "M", "2029-06-15") // červnu
```

## Vývoj

Projekt czechdate využívá Vitest pro automatické testy