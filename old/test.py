counter = open('counter.txt', 'r+')
print(counter.read())

counter.write('\n2')

for last_line in counter.readline():
    pass

print(last_line)