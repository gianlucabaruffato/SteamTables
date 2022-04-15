import pandas as pd

text_input = open('sobrecal2.txt', 'r').read()

text_split = text_input.split('\n')

# pres_split = text_split[0].split()




p_index = [1, 6, 11]
p_index2 = [1, 4, 7]



columns = ['P', 'T', 'v', 'u', 'h', 's']
columns2 = ['P', 'v', 'u', 'h', 's']



array_sobrecalentado = pd.DataFrame(columns=columns)

pres_array = []

for line in text_split:
    if line.find('P') != -1:
        pres_split = line.split()
        if line.find('C') != -1:
            for item in p_index:
                pres_array.append(pres_split[item])
        else:
            for item in p_index2:
                pres_array.append(pres_split[item])


sat_index = [3,8,13]
sat_array = []


for line in text_split:
    if line.find('C') != -1:
        for item in sat_index:
            sat_array.append(line.split()[item][1:])
print(sat_array)

for p_item in p_index:
    p = 'P'
    
    counter = -1

    for item in text_split:
        split = item.split()
        

        if len(split) <= 1:
            break

        if item.find('P') == -1:
            if p_item == 1:
                for i in range(len(split)-5):
                    split.pop(5)
                


                split.insert(0, p)
                array_sobrecalentado1 = pd.DataFrame([split], columns=columns)
                array_sobrecalentado = array_sobrecalentado.append(array_sobrecalentado1)


            elif p_item == 6:
                counter += 1
                try:
                    for i in range(5):
                        split.pop(0)
                    for i in range(4):
                        split.pop(4)
                    split.insert(0, p)
                    
                    

                    array_sobrecalentado2 = pd.DataFrame([split], columns=columns2)               
                    array_sobrecalentado2.insert(1, column='T', value=array_sobrecalentado.iat[counter, 1])                
                
                except IndexError:
                    pass

                array_sobrecalentado = array_sobrecalentado.append(array_sobrecalentado2)


            elif p_item == 11:
                counter += 1
                
                if len(split) > 9:
                    try:
                        for i in range(9):
                            split.pop(0)

                        split.insert(0, p)


                        array_sobrecalentado3 = pd.DataFrame([split], columns=columns2)            
                        array_sobrecalentado3.insert(1, column='T', value=array_sobrecalentado.iat[counter, 1])
                    except IndexError:
                        pass
                
                    array_sobrecalentado = array_sobrecalentado.append(array_sobrecalentado3)



a = 0
b = 0

array_sobrecalentado = array_sobrecalentado.drop_duplicates()

for i in range(len(array_sobrecalentado)):
    if array_sobrecalentado.iat[i, 1] == 'Sat.':
        array_sobrecalentado.iat[i, 1] = sat_array[a]
        a += 1

    # array_sobrecalentado.iat[i, 0] = pres_array[b]
    
    if array_sobrecalentado.iat[i, 1] > array_sobrecalentado.iat[i+1, 1]:
        b += 1

    print(b)

# array_sobrecalentado.to_excel('sobrecal.xlsx')
# print(array_sobrecalentado)
