---
title: Umstieg auf Archicad 30: Projekte und Vorlage migrieren
date: 2026-10-29
excerpt: Umstieg auf Archicad 30 ohne Datenverlust: Bürovorlage, Bibliotheken und Teamwork-Projekte migrieren – mit Checkliste und typischen Fehlern aus der Praxis.
tags: Archicad, BIMcloud, Teamwork, Bürostandard
---

Der **Umstieg auf Archicad 30** ist mehr als eine neue Installation: Bürovorlage, Bibliotheken, Übersetzer und laufende Teamwork-Projekte müssen mitziehen. In diesem Beitrag zeigen wir, was Graphisofts Migrationsleitfaden konkret vorgibt, in welcher Reihenfolge Sie vorgehen sollten und welche Fehler wir in der Praxis am häufigsten sehen.

Was die neue Version inhaltlich bringt, haben wir in [Archicad 30 – was die neue Version für Planungsbüros bringt](/blog/2026-10-14-archicad-30-neuerungen-fuer-planungsbueros) zusammengefasst. Hier geht es nur um den Weg dorthin – also die **Archicad 30 Migration** im Büroalltag.

## Welche Projekte kann Archicad 30 öffnen?

Laut Graphisoft öffnet Archicad 30 Projekte ab **Version 17** direkt. Ältere Dateien müssen zuerst in einer Version zwischen 17 und 29 geöffnet und gespeichert werden, bevor sie sich in Archicad 30 öffnen lassen.

Der umgekehrte Weg ist enger: Archicad 30 kann Projektdateien unter den früheren Formaten **nur als Archicad 29** speichern (*Datei > Speichern unter*, Dateityp „Archicad 29 Project“ in der englischen Oberfläche). Bibliothekselemente, die für Version 30 überarbeitet wurden, werden dabei automatisch durch ihre Vorgänger ersetzt. Elemente, die Parameter oder Funktionen nutzen, die es in 29 noch nicht gibt, erscheinen dort als *fehlend*. Wer mit einem Partnerbüro zusammenarbeitet, das noch auf 28 oder älter arbeitet, muss sich darauf einstellen, Schritt für Schritt über jede Zwischenversion zurückzuspeichern – Graphisoft erlaubt das Rückspeichern jeweils nur eine Version zurück.

Für die Praxis heißt das: Klären Sie vor dem Wechsel, mit wem Sie PLN-Dateien austauschen. Bei gemischten Versionen ist der Austausch über IFC oder Module oft der stabilere Weg.

## Wie migriere ich die Bürovorlage auf Archicad 30?

Die Bürovorlage (.tpl) ist der eigentliche Hebel beim Umstieg: Jedes neue Projekt erbt ihre Fehler. Wir gehen deshalb so vor:

1. Die aktuelle Vorlage in Archicad 30 öffnen und unter neuem Namen als Projekt speichern – das Original bleibt unangetastet.
2. Bibliotheken prüfen: Stammt die Vorlage noch aus der Zeit vor Archicad 28, nutzt sie meist eine versionsgebundene „monolithische“ Bibliothek. Seit Version 28 setzt Graphisoft auf die **Global Library** mit Bibliothekspaketen (libpacks); neue Bibliotheksentwicklungen gibt es laut Graphisoft nur noch dort.
3. Übersetzer kontrollieren: IFC- und DXF/DWG-Übersetzer aus älteren Vorlagen sollten neu aufgesetzt oder gezielt aktualisiert werden. Gerade beim IFC lohnt der Blick auf die neuen Optionen für Zonen – Details in unserem Beitrag zum [Archicad 30 IFC-Export](/blog/2026-10-27-archicad-30-ifc-export-fachplaner).
4. Ansichtskombinationen, Grafische Überschreibungen, Stempel und Planköpfe mit einem Testplan durchgehen.
5. Erst wenn ein kleines Testprojekt sauber durchläuft, als neue **.tpl** speichern und im Büro verteilen.

Ein Hinweis zu den Bibliotheken: Graphisoft unterscheidet klar zwischen der alten monolithischen Bibliothek (bis Version 27) und der Global Library (ab 28). Inhalte der Global Library sind nicht rückwärtskompatibel, und neue Objekte lassen sich nach dem Wechsel nur noch aus der Global Library platzieren. Bereits platzierte Objekte aus der alten Bibliothek bleiben bearbeitbar.

## Bibliotheken migrieren: Was passiert mit alten Objekten?

Öffnen Sie ein älteres Projekt mit einer alten Archicad-Bibliothek, erscheint eine Warnung. Über die Schaltfläche **Migrate Archicad Libraries** (englische Bezeichnung) lädt Archicad die *Monolith Migration Library*, aktualisiert die platzierten Objekte auf die jeweils neueste kompatible Version und entfernt die älteren Bibliotheksversionen. Die Migrationsbibliothek ist ein separater Download und wird nicht weiterentwickelt – ihr Inhalt entspricht laut Graphisoft der Bibliothek von Archicad 27.

Typischer Stolperstein: eigene Büro-Objekte (GDL), die auf Teile der alten Bibliothek verweisen. Diese sollten Sie vor dem Umstieg auflisten und in einem Testprojekt prüfen. Bei uns hat sich bewährt, nach der Migration den Bibliotheksmanager auf fehlende Elemente zu kontrollieren, bevor jemand im Projekt weiterarbeitet.

## Teamwork-Projekt auf Archicad 30 migrieren: So läuft es

Für Teamwork-Projekte auf dem BIMcloud gibt Graphisoft einen festen Ablauf vor. Auf dem Rechner müssen die alte Version und Archicad 30 installiert sein, und es braucht Zugriff auf ein BIMcloud für Version 30. Ob Ihr BIMcloud bereits passend aktualisiert ist, sollten Sie vorab mit Ihrer IT bzw. Ihrem Graphisoft-Partner klären – das hängt von Ihrer Installation ab.

1. Alle Teammitglieder senden ihre Änderungen und verlassen das Projekt. Wer das nicht tut, verliert laut Graphisoft seine nicht gesendeten Änderungen.
2. In der alten Version das Projekt für die Migration vorbereiten (in der englischen Oberfläche: *Teamwork > Project > Migrate Project > Prepare for Migration*; die Bezeichnungen in der deutschen Version können abweichen).
3. In Archicad 30 über *Migrate Prepared Projects* das vorbereitete Projekt wählen, Zielserver angeben, Optionen prüfen und migrieren.
4. Das Originalprojekt anschließend manuell vom Server löschen – aber erst, wenn das migrierte Projekt geprüft ist.

Wichtig: **Projektprotokoll, Kommentare, Nachrichten und Reservierungen werden bei der Migration gelöscht.** Offene Abstimmungen aus den Teamwork-Nachrichten sollten Sie vorher dokumentieren. Hotlink-Module und verknüpfte Zeichnungen müssen ebenfalls migriert werden; liegen sie auf einem anderen Server, sind sie manuell neu zu verknüpfen. Die Option „Monolithische Bibliotheken migrieren“ betrifft nur Projekte mit versionsgebundenen Bibliotheken aus Archicad 27 und älter. Objekte, die direkt nach der Migration als „vorübergehend fehlend“ angezeigt werden, erscheinen laut Graphisoft wieder, sobald die anderen Nutzer *Senden & Empfangen* ausführen.

## Checkliste und typische Fehler beim Umstieg

- **Kein Wechsel mitten in der Abgabe:** Laufende Projekte kurz vor Werkplanungs- oder Ausschreibungsabgabe besser in der alten Version abschließen.
- **Partner abfragen:** Wer bekommt PLN-Dateien, wer nur IFC/DWG/PDF? Rückspeichern geht nur auf Archicad 29.
- **Vorlage zuerst, Projekte danach:** Erst die neue Bürovorlage testen, dann neue Projekte darauf starten.
- **Teamwork-Kommunikation sichern:** Nachrichten, Kommentare und Reservierungen gehen bei der Migration verloren.
- **Hotlinks mitdenken:** Module vor dem Hostprojekt bzw. gemeinsam migrieren und Verknüpfungen prüfen.
- **IFC-Test mit Fachplanern:** Einen Testexport schicken, bevor das erste migrierte Projekt in die Koordination geht.
- **Migrationsleitfaden lesen:** Für Projekte aus 28 und 29 gibt es eigene Hinweise, etwa zu Keynote-Legenden; Projekte bis Version 28 betrifft zusätzlich die Migration von Markern mit Renovierungsstatus.

## Häufige Fragen

### Kann ich ein Archicad-30-Projekt in Archicad 28 öffnen?

Nicht direkt. Archicad 30 speichert nur ins Format von Archicad 29 zurück; für 28 müssen Sie die Datei anschließend in Archicad 29 erneut eine Version zurückspeichern.

### Muss ich die Bürovorlage neu aufbauen?

In der Regel nicht komplett. Meist reicht es, die bestehende Vorlage in Archicad 30 zu öffnen, Bibliotheken und Übersetzer zu aktualisieren und das Ergebnis an einem Testprojekt zu prüfen. Bei sehr alten Vorlagen mit monolithischer Bibliothek kann ein gezielter Neuaufbau sinnvoller sein.

### Gehen beim Migrieren eines Teamwork-Projekts Daten verloren?

Das Modell nicht, aber laut Graphisoft werden Projektprotokoll, Kommentare, Nachrichten und Reservierungen gelöscht. Nicht gesendete Änderungen gehen verloren, wenn Nutzer das Projekt vorher nicht verlassen.

## Unser Fazit

Der Umstieg auf Archicad 30 ist gut planbar, wenn Sie die Reihenfolge einhalten: Partner abfragen, Bürovorlage testen, Bibliotheken prüfen, dann Teamwork-Projekte migrieren. Die meisten Probleme entstehen nicht in der Software, sondern durch fehlende Abstimmung im Team oder mit Partnerbüros.

Wenn Ihnen dafür im Büro gerade die Zeit fehlt, übernehmen wir das gern. Als Einstieg bieten wir ein **Pilotprojekt** an: eine klar abgegrenzte Aufgabe von 4 Stunden zum Festpreis von **126 € (bzw. 168 CHF)**, zum Beispiel die Prüfung Ihrer Bürovorlage in Archicad 30 mit Testmigration eines Projekts und IFC-Testexport. Alle Pakete finden Sie unter [Pakete & Konditionen](/ueber-uns#pakete); für eine Anfrage nutzen Sie bitte unser [Kontaktformular](/kontakt).

### Quellen

- [Graphisoft Help: Migrating to Archicad 30](https://help.graphisoft.com/AC/30/INT/Topics/010_MigrationGuide/010_MigrationGuide-1.html)
- [Graphisoft Help: Migrating Libraries to Archicad 30](https://help.graphisoft.com/AC/30/INT/Topics/010_MigrationGuide/010_MigrationGuide-4.html)
- [Graphisoft Help: New Global Library (Archicad 28 and later)](https://help.graphisoft.com/AC/30/INT/Topics/010_MigrationGuide/010_MigrationGuide-5.html)
- [Graphisoft Help: Migrating a Teamwork Project](https://help.graphisoft.com/AC/30/INT/Topics/010_MigrationGuide/010_MigrationGuide-6.html)
- [Graphisoft Help: Project File Types (Save)](https://help.graphisoft.com/AC/30/INT/Topics/120_Interoperability/120_Interoperability-9.html)
- [Graphisoft Support: How to back-save in Archicad to a lower version](https://support.graphisoft.com/hc/en-us/articles/32176331756433-How-to-back-save-in-Archicad-to-a-lower-version)
