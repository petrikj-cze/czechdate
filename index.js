export function czechDate(
    gramatical = "genitiv",
    format = "DMY",
    datetime = new Date().toLocaleDateString()
) {
    let formated;
    let day;
    let month;
    let year;

    const months = {
        nominativ: [
            "leden",
            "únor",
            "březen",
            "duben",
            "květen",
            "červen",
            "červenec",
            "srpen",
            "září",
            "říjen",
            "listopad",
            "prosinec",
        ],

        genitiv: [
            "ledna",
            "února",
            "března",
            "dubna",
            "května",
            "června",
            "července",
            "srpna",
            "září",
            "října",
            "listopadu",
            "prosince",
        ],

        locativ: [
            "lednu",
            "únoru",
            "březnu",
            "dubnu",
            "květnu",
            "červnu",
            "červenci",
            "srpnu",
            "září",
            "říjnu",
            "listopadu",
            "prosinci",
        ],
    };

    if (datetime.includes(".")) {
        const dateParts = datetime.split(".")

        day = dateParts[0].trim()
        month = dateParts[1].trim()
        year = dateParts[2].trim()
    } else if (datetime.includes("-")) {
        const dateParts = datetime.split("-")

        year = dateParts[0].trim()
        month = dateParts[1].trim()
        day = dateParts[2].trim()
    }



    if (gramatical == "genitiv") {
        if (format == "D") {
            formated = day + ". "
        } else if (format == "M") {
            formated = months.genitiv[month - 1]
        } else if (format == "Y") {
            formated = year
        } else if (format == "DM") {
            formated = day + ". " + months.genitiv[month - 1]
        } else if (format == "MY") {
            formated = months.genitiv[month - 1] + " " + year
        } else if (format == "DMY") {
            formated = day + ". " + months.genitiv[month - 1] + " " + year
        }

    } else if (gramatical == "nominativ") {
        if (format == "D") {
            formated = day + ". "
        } else if (format == "M") {
            formated = months.nominativ[month - 1]
        } else if (format == "Y") {
            formated = year
        } else if (format == "DM") {
            formated = day + ". " + months.nominativ[month - 1]
        } else if (format == "MY") {
            formated = months.nominativ[month - 1] + " " + year
        } else if (format == "DMY") {
            formated = day + ". " + months.nominativ[month - 1] + " " + year
        }
    } else if (gramatical == "lokativ") {
        if (format == "D") {
            formated = day + ". "
        } else if (format == "M") {
            formated = months.locativ[month - 1]
        } else if (format == "Y") {
            formated = year
        } else if (format == "DM") {
            formated = day + ". " + months.locativ[month - 1]
        } else if (format == "MY") {
            formated = months.locativ[month - 1] + " " + year
        } else if (format == "DMY") {
            formated = day + ". " + months.locativ[month - 1] + " " + year
        }
    }

    return formated
}
