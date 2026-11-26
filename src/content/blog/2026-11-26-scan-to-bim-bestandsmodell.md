---
title: Scan to BIM: So entsteht ein brauchbares Bestandsmodell
date: 2026-11-26
excerpt: Scan to BIM für Planungsbüros: wie aus der Punktwolke ein Bestandsmodell in Archicad wird, welcher Detaillierungsgrad reicht und was Sie vorab festlegen.
tags: Scan-to-BIM, Bestandsmodell, Archicad, Bauen im Bestand, Punktwolke
---
**Scan to BIM** heisst: Aus einem Laserscan des Gebäudes entsteht ein **Bestandsmodell**, auf dem Ihr Büro direkt weiterplanen kann. In diesem Beitrag zeigen wir, wie der Weg von der Punktwolke zum Archicad-Modell praktisch abläuft, welchen Detaillierungsgrad Sie wirklich brauchen und welche Punkte Sie vor der Vergabe festlegen sollten, damit das Modell im Projekt auch funktioniert.

Das Thema wird nicht kleiner: Laut Statistischem Bundesamt wurden in Deutschland im September 2026 rund 4000 Wohnungen durch Umbaumassnahmen in bestehenden Gebäuden genehmigt – 15,8 % mehr als im Vorjahresmonat, während die Zahl der genehmigten Neubauwohnungen um 19,9 % zurückging. Von Januar bis September lag das Plus beim Umbau bei 10,8 %. Wer im Bestand plant, braucht eine verlässliche Grundlage.

## Was ist Scan to BIM – und was nicht?

Beim Scan to BIM wird das Gebäude mit einem terrestrischen Laserscanner oder einem mobilen Scansystem erfasst. Ergebnis ist eine **Punktwolke**: Millionen von Messpunkten mit Lage- und oft Farbinformation. Die Punktwolke selbst ist noch kein BIM-Modell. Sie zeigt, *wo* Oberflächen liegen, aber nicht, *was* sie sind – Wand, Stütze, Brüstung oder Möbel.

Erst im zweiten Schritt wird daraus ein Bestandsmodell: Bauteile werden anhand der Punktwolke modelliert, klassifiziert und mit Eigenschaften versehen. Dieser Schritt ist Planungsarbeit, keine reine Datenkonvertierung. Automatische Erkennung hilft bei einfachen Geometrien, ersetzt aber nicht die Entscheidung, wie ein schiefer Altbau sinnvoll in Bauteile übersetzt wird.

## Wie kommt die Punktwolke in Archicad?

Archicad öffnet laut Graphisoft-Hilfe die Formate **.e57** und **.xyz** und wandelt sie in Punktwolkenobjekte um, die im Grundriss oder im 3D-Fenster platziert werden. Auf dieser Grundlage werden Wände, Decken, Öffnungen und Dächer nachgezeichnet. Für Teamwork-Projekte beschreibt Graphisoft einen eigenen Ablauf zum Platzieren des Punktwolkenobjekts.

Zwei Punkte sollten Sie aus der Praxis kennen:

- **Punktwolken erscheinen nicht in veröffentlichten Ausgaben.** Pläne für Bauherrschaft oder Behörde entstehen aus den modellierten Bauteilen, nicht aus der Wolke. Ein Modell, das nur aus Punktwolke plus Skizzen besteht, liefert also keine brauchbaren Bestandspläne.
- **Datenmenge und Ausschnitt früh klären.** Ein vollständiger Gebäudescan ist schnell sehr gross. Sinnvoll ist es, die Punktwolke geschoss- oder bereichsweise aufzuteilen und nur das zu laden, was für den jeweiligen Arbeitsschritt nötig ist.

Wenn Fachplaner nicht mit Archicad arbeiten, wird das fertige Bestandsmodell in der Regel als IFC übergeben. Was dabei zu beachten ist, haben wir in [Archicad 30 IFC-Export: Zonen als IfcSpatialZone übergeben](/blog/2026-10-27-archicad-30-ifc-export-fachplaner) beschrieben.

## Welcher Detaillierungsgrad reicht für ein Bestandsmodell?

Die häufigste Ursache für Ärger ist nicht der Scan, sondern ein unklarer Auftrag. „Bitte ein BIM-Modell vom Bestand“ kann ein einfaches Massenmodell oder ein bauteilgenaues Modell mit Schichtaufbauten bedeuten. Der Aufwand unterscheidet sich um ein Vielfaches.

Legen Sie deshalb vorab fest, wofür das Modell gebraucht wird:

- **Entwurf und Machbarkeit:** Wände, Decken, Öffnungen, Treppen und Dach in ihrer Lage; Schichtaufbauten nur, soweit bekannt.
- **Ausführungsplanung im Umbau:** zusätzlich genaue Öffnungsmasse, Höhenkoten, Unterzüge, Schächte und relevante Versprünge.
- **Fassadensanierung oder Aufstockung:** Fassade, Dachrand und Tragstruktur besonders genau, Innenräume vereinfacht.

Hilfreich ist es, für jede Bauteilgruppe zu definieren, ob sie geometrisch genau, vereinfacht oder gar nicht modelliert wird – und welche Toleranz zur Punktwolke akzeptiert wird. Bei unebenen Altbauwänden muss entschieden werden, ob sie als gerade Wand mit mittlerer Dicke oder als verformte Geometrie abgebildet werden. Für die Weiterplanung ist die gerade Wand fast immer die bessere Wahl; Abweichungen werden dann dokumentiert statt nachgebaut.

In Deutschland ist die Bestandsaufnahme in der HOAI als **Besondere Leistung** in der Leistungsphase 1 aufgeführt, wird also in der Regel gesondert vereinbart. In der Schweiz sollte sie ebenfalls ausdrücklich im Vertrag stehen – idealerweise abgeschlossen, bevor das Vorprojekt (SIA-Phase 31) bzw. LPH 2 richtig beginnt.

## Checkliste: Bestandsmodell extern erstellen lassen

Wenn Sie das **Bestandsmodell erstellen lassen**, klären Sie diese Punkte vor dem Start:

1. **Zweck und Umfang:** Welche Geschosse, welche Bereiche, welcher Detaillierungsgrad je Bauteilgruppe?
2. **Datengrundlage:** Punktwolke im Format E57, registriert und georeferenziert oder mit lokalem Koordinatensystem? Gibt es Fotos, alte Pläne oder ein Aufmassprotokoll?
3. **Bürostandard:** Arbeiten wir in Ihrer Archicad-Vorlage mit Ihren Ebenen, Baustoffen und Klassifizierungen – oder in einem neutralen Standard?
4. **Koordinaten und Projektnullpunkt:** Wo liegt ±0.00, wie wird der Projektnullpunkt zur Punktwolke ausgerichtet?
5. **Übergabeformat:** PLN, Teamwork-Projekt über BIMcloud oder IFC – und für welche Partner?
6. **Prüfung:** Wie wird die Abweichung zwischen Modell und Punktwolke kontrolliert? Stichproben an definierten Stellen genügen meist.
7. **Dokumentation:** Unsicherheiten (verdeckte Bauteile, unzugängliche Räume) gehören in eine kurze Liste, nicht stillschweigend ins Modell.

### Typische Fehler

- Das Modell wird genauer gebaut, als das Projekt es braucht – und frisst Zeit, die später in der Ausführungsplanung fehlt.
- Der Bürostandard wird erst nach der Modellierung abgestimmt, Ebenen und Baustoffe müssen nachträglich umgestellt werden.
- Verdeckte Bauteile werden als gesichert modelliert, obwohl sie nur angenommen sind.
- Niemand prüft vor dem Weiterplanen, ob Projektnullpunkt und Höhen stimmen.

## Häufige Fragen

### Brauche ich für Scan to BIM immer einen Laserscan?

Nein. Für kleine Umbauten reichen oft ein Handaufmass und Fotos. Ein Laserscan lohnt sich vor allem bei komplexer Geometrie, grossen Flächen oder wenn Genauigkeit für Fassade und Tragwerk entscheidend ist.

### Kann ich ein Bestandsmodell aus alten Plänen erstellen lassen?

Ja, als Grundlage für Machbarkeit und Entwurf. Für die Ausführungsplanung sollten die Masse aber vor Ort oder per Scan überprüft werden, weil alte Pläne den gebauten Zustand oft nicht genau zeigen.

### In welchem Format erhalte ich das Modell?

Üblich sind eine Archicad-Datei (PLN) in Ihrem Bürostandard, ein Teamwork-Projekt auf Ihrer BIMcloud oder ein IFC-Modell für Fachplaner. Das Format sollte vor Beginn feststehen.

## Unser Fazit

Ein gutes Bestandsmodell entsteht nicht durch möglichst viele Punkte, sondern durch klare Vorgaben: Zweck, Detaillierungsgrad, Bürostandard und Übergabeformat. Wer diese Fragen vor dem Scan beantwortet, bekommt ein Modell, auf dem das Team direkt weiterplanen kann. Wie es danach mit Werk- und Detailplänen weitergeht, lesen Sie in [Ausführungsplanung auslagern: So gelingt es im Büro](/blog/2026-11-12-ausfuehrungsplanung-auslagern).

Wenn bei Ihnen ein Umbau, eine Aufstockung oder eine Sanierung ansteht, senden Sie uns eine kurze Projektanfrage. Eine klar abgegrenzte erste Aufgabe aus einem laufenden Projekt – zum Beispiel das Bestandsmodell eines Geschosses aus Ihrer Punktwolke in Ihrem Archicad-Standard – ist ein risikoarmer Weg, die Zusammenarbeit zu testen. Unsere [Leistungspakete](/ueber-uns#pakete) finden Sie auf der Seite Über uns; für Ihre Anfrage nutzen Sie bitte unser [Kontaktformular](/kontakt). Nach Durchsicht Ihrer Unterlagen erhalten Sie ein verbindliches Angebot.

### Quellen

- [Statistisches Bundesamt: Baugenehmigungen für Wohnungen im September 2026: -14,8 % zum Vorjahresmonat (Pressemitteilung Nr. 402 vom 18.11.2026)](https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/11/PD26_402_3111.html)
- [Graphisoft Hilfe (Archicad 28): Arbeiten mit Punktwolken](https://help.graphisoft.com/AC/28/GER/_AC28_Help/120_Interoperability/120_Interoperability-32.htm)
- [HOAI, Anlage 10: Grundleistungen und Besondere Leistungen im Leistungsbild Gebäude und Innenräume](https://www.gesetze-im-internet.de/hoai_2013/anlage_10.html)
