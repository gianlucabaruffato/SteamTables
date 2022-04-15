import pandas as pd
import numpy as np


columns = ['T', 'Psat', 'VLS', 'VVS', 'EnIntLS', 'EnIntEvap', 'EnIntVS', 'EntLS', 'EntEvap', 'EntVS', 'EntrLS', 'EntrEvap', 'EntrVS']
text_input = open('Temp.txt', 'r').read()
items = text_input.split('\n')



df = pd.DataFrame(columns=columns)

for item in items:
    arraydf = pd.DataFrame([item.split()], columns=columns)
    df = df.append(arraydf, ignore_index=True)

df.to_csv('temp',index=False)