import csv
import json

def read_data(input_file):
    with open(input_file, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

def filter_winery_info(data):
    wineries = []

    for winery_info in data:
        # Your filtering criteria go here
        if "Назив на производителот на вино" in winery_info:
            wineries.append({
                "Место": winery_info.get("Место", ""),
                "Регистарски број": winery_info.get("Регистарски број", ""),
                "Назив на производителот на вино": winery_info["Назив на производителот на вино"],
                "Адреса на седиштето на производителот на вино": winery_info["Адреса на седиштето на производителот на вино"],
                "Капацитет за прием и преработка на грозје (тони)": winery_info.get("Капацитет за прием и преработка на грозје (тони)", ""),
                # Add more fields as needed
            })

    return wineries

def write_to_csv(output_file, wineries):
    with open(output_file, 'w', newline='', encoding='utf-8-sig') as file:
        fieldnames = ["Место", "Регистарски број", "Назив на производителот на вино", "Адреса на седиштето на производителот на вино", "Капацитет за прием и преработка на грозје (тони)"]
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()

        for winery in wineries:
            writer.writerow(winery)

if __name__ == "__main__":
    input_file = "MKVinarii.json"  # Replace with the actual JSON file
    output_file = "wineries_output.csv"  # Replace with the desired CSV output file

    data = read_data(input_file)
    filtered_wineries = filter_winery_info(data)
    write_to_csv(output_file, filtered_wineries)