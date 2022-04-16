# make a program that read an excel file and prints it to a text file
from json import load
from venv import create
from openpyxl import load_workbook

# Lê o arquivo excel
wb = load_workbook('Futquiz.xlsx')
sheet = wb.active
rows = sheet.rows

# Escrever o conteudo do excel em json

f = open('Futquiz.json', 'w', encoding='utf-8')
f.write('[\n')

id = 0


for row in rows:
    id += 1
    f.write('{\n')
    f.write('"id": "' + str(id) + '",\n')
    for cell in row:
        # if cell have "B" in it print cell.value
        if "B" in str(cell):
            f.write('"resposta": "' + str(cell.value) + '",\n')
            f.write('"imagem": "colocar_imagem"\n')
            f.write('},\n')
        else:
            f.write('"pergunta": "' + str(cell.value) + '",\n')
f.seek(f.tell() - 3, 0)
f.write('\n]')
f.close()
