# How to use if
a_1 = float(input('Enter the first number: '))
a_2 = float(input('Enter the second number: '))
if a_1>a_2:
    print(a_1+' is bigger than '+a_2)
elif a_2 > a_1 :
    print('{} is bigger than {}'.format(a_2, a_1))
else: 
    print('{} and {} are equal'.format(a_1, a_2))
print('done, {} to the power of {} is {}'.format(a_1, a_2, a_1 ** a_2))
print(f"done, {a_1} to the power of {a_2} is {a_1 ** a_2}") # f string literals

a = 'abcdefgh'
print(a[0:5:2]) # the 3rd parameter is the step
print(a[::2]) # the whole string with step size of 2
print(a[::-1]) # the whole string backward

b = 'a-b-c-d'
print(b.split('-')) # makes a list out of a string, you can define on what to split, i.e.: ,
list1 = ['a', 'b', 'c', 'd']
print('-'.join(list1)) # makes a string out of a list, you can define what to put between them

# ordered combinations: how many different ordered groups of k objects you can select from a group of n objects:
n = int(input('Enter the number of objects (n): '))
k = int(input('Enter the number of objects to be selected (k): '))
a = 1
b = 1
for i in range (0, k):
    a = a * (n-i)
    b = b * (i+1)
print (f"how many different groups of {k} objects you can select from a group of {n} objects? : {int(a/b)}")

# for loops on a list/tuple using enumerate
squers = ['a', 'b', 'c', 'd', 'e', 'f']
for i, sq in enumerate(squers):
    print (i, sq)
    squers[i] = 'a'
print (squers)