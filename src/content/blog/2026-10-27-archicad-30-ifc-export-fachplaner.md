---
title: Archicad 30 IFC-Export: Zonen als IfcSpatialZone übergeben
date: 2026-10-27
excerpt: Archicad 30 IFC-Export für Fachplaner: Wie Zonen und Morphs als IfcSpatialZone exportiert werden, welche Einstellungen zählen und wie Sie die Übergabe testen.
tags: Archicad, IFC, OpenBIM, BIM-Koordination
---

Der **Archicad 30 IFC-Export** kann Zonen und Morphs als **IfcSpatialZone** übergeben – und damit Bereiche, die sich nicht mit einem einzelnen Raum decken. In diesem Beitrag zeigen wir, was sich für die Übergabe an Fachplaner ändert, welche Einstellungen im Export-Übersetzer zählen und wie Sie die Übergabe testen, bevor das erste Projekt ins neue Release wechselt.

Die allgemeinen Neuerungen der Version haben wir bereits in unserem Beitrag [Archicad 30 – was die neue Version für Planungsbüros bringt](/blog/2026-10-14-archicad-30-neuerungen-fuer-planungsbueros) zusammengefasst. Hier geht es nur um IFC.

## Was ist neu beim IFC-Export in Archicad 30?

Nach den Angaben von Graphisoft können Archicad-Klassifizierungen für **Zonen** oder **Morphs** beim Export mit der Typ-Zuordnung für IFC4 bzw. IFC4x3 als `IfcSpatialZone` ausgegeben werden. Diese Elemente erscheinen anschließend auch im IFC Project Manager. Das heißt: Bereiche wie Nutzungseinheiten, Brandabschnitte oder andere Zonen müssen nicht mehr zwangsläufig in Raumlisten oder Eigenschaften „versteckt“ werden, sondern können als eigene räumliche Einheiten im Modell mitreisen.

Zusätzlich nennt Graphisoft einen erweiterten IFC4x3-Import und eine überarbeitete Projektinfo, die direkt auf IfcProject und IfcSite abgebildet wird. Für den Export in der täglichen Praxis ist aber vor allem die Zonen-Abbildung relevant.

Wichtig: Ob diese Daten beim Empfänger ankommen, hängt von dessen Software ab. Dass Archicad etwas exportiert, bedeutet nicht, dass jede Fachplaner-Software es liest.

## Welche Einstellungen im IFC-Export zählen wirklich?

Aus unserer Projektpraxis sind es vier Stellen, an denen Übergaben scheitern oder gelingen:

1. **Schema und Model View Definition.** Archicad unterscheidet bei IFC4 die *Reference View* (Referenzmodell, Daten laufen überwiegend in eine Richtung) und die *Design Transfer View* (für Fälle, in denen der Empfänger Geometrie weiterbearbeiten muss). Welche Variante passt, entscheidet der Fachplaner – nicht das Architekturbüro. Laut Graphisoft sollten Sie IFC4 nur wählen, wenn die empfangende Software IFC4 unterstützt.
2. **Typ-Zuordnung.** Hier legen Sie fest, welches Archicad-Element als welche IFC-Klasse (ObjectType, PredefinedType) ausgegeben wird. Die neue Zonen-Abbildung hängt an dieser Zuordnung.
3. **Eigenschaften-Zuordnung.** Property Sets wie `Pset_…Common` (z. B. Tragend, Außenbauteil) werden über Zuordnungsregeln befüllt. Dort entscheidet sich, ob Fachplaner mit den Daten etwas anfangen können.
4. **Projektinfo.** Name, Phase, Standortangaben und Kontakte werden auf IfcProject, IfcSite und IfcBuilding abgebildet. Fehlende oder inkonsistente Angaben fallen im Koordinationsmodell sofort auf.

## Wie testen Sie die Übergabe an Fachplaner?

Unsere Empfehlung als einfache Checkliste:

- Ein **kleines Testmodell** mit 2–3 Geschossen, einigen Wänden, Decken, einer Zone und einem Morph für einen Brandabschnitt anlegen.
- Die Zonen/Morphs **klassifizieren** und die Typ-Zuordnung auf IfcSpatialZone prüfen.
- Mit demselben Übersetzer exportieren, den Sie im Projekt verwenden würden.
- Die IFC-Datei **vom Fachplaner in dessen Software öffnen lassen** – oder selbst in einem neutralen IFC-Viewer prüfen: Sind Geschosse korrekt zugeordnet? Sind die Zonen als eigene Einheiten sichtbar? Stimmen die Property Sets?
- Das Ergebnis dokumentieren (Übersetzer-Version, Schema, Einstellungen) und in die **Büro-Vorlage** übernehmen.

Typische Fehler, die wir dabei sehen: nicht klassifizierte Elemente, die als generische Proxy-Objekte exportiert werden, uneinheitliche Geschossnamen und Projektinfo-Felder, die leer bleiben.

## Häufige Fragen

### Muss ich für den IFC-Export auf Archicad 30 umsteigen?

Nein. IFC lässt sich auch mit älteren Versionen austauschen. Die Abbildung von Zonen und Morphs als IfcSpatialZone ist eine Verbesserung für Büros, die solche Bereiche ohnehin an Fachplaner übergeben müssen. Ein Umstieg mitten in einer Leistungsphase ist dafür nicht zu empfehlen.

### Liest jede Software IfcSpatialZone?

Das lässt sich pauschal nicht sagen. Deshalb ist der Test mit der Software des jeweiligen Fachplaners der wichtigste Schritt. Klären Sie früh, welches IFC-Schema und welche Model View Definition der Partner erwartet.

### Wann lohnt es sich, den IFC-Export auszulagern?

Wenn mehrere Fachplaner mit unterschiedlichen Anforderungen beteiligt sind und im Büro die Zeit fehlt, Übersetzer, Zuordnungen und Modellqualität sauber aufzusetzen. Ein externer Modell-Check vor der Übergabe findet Fehler, bevor sie im Koordinationsmodell auffallen.

## Unser Fazit

Mit Archicad 30 wird die Übergabe räumlicher Bereiche über IFC einfacher – aber nur, wenn Klassifizierung, Typ-Zuordnung und Eigenschaften im Büro sauber vorbereitet sind. Testen Sie den Export an einem kleinen Modell und stimmen Sie ihn mit Ihren Fachplanern ab, bevor ein Projekt migriert wird.

Wenn Sie das nicht selbst aufsetzen möchten: Wir bieten als Einstieg ein **Pilotprojekt** an – eine klar abgegrenzte Aufgabe von 4 Stunden zum Festpreis von **126 € (bzw. 168 CHF)**, zum Beispiel einen Modell-Check mit IFC-Testexport. Pakete und Konditionen finden Sie unter [Pakete & Konditionen](/ueber-uns#pakete); für eine Anfrage nutzen Sie bitte unser [Kontaktformular](/kontakt).

### Quellen

- [BIM Digest: Spotlight Archicad 30 – an IFC 4.3 handoff that is not a waitlist](https://www.bimdigest.com/blog/spotlight-archicad-30/)
- [Nordic BIM: Archicad 30 – less friction in the work you do every day](https://www.nordicbim.com/en/insights/archicad-30)
- [Graphisoft Hilfe: Model View Definitions](https://help.graphisoft.com/AC/29/INT/_AC29_Help/121_IFC/121_IFC-47.htm)
- [Graphisoft Hilfe: Vorgegebene Eigenschaften-Zuordnung (Archicad nach IFC exportieren)](https://help.graphisoft.com/AC/28/GER/_AC28_Help/121_IFC/121_IFC-50.htm)
- [Graphisoft: New Features in the 2026 Product Lineup](https://www.graphisoft.com/en-us/plans-and-products/whats-new/)
