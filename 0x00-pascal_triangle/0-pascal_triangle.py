#!/usr/bin/python3

def pascal_triangle(n):
    myList = []

    if n <= 0:
        return []
    else:

        for i in range(n):
            temp_list = []

            for j in range(i+1):
                if j == 0 or j == i:
                    temp_list.append(1)
                else:
                    temp_list.append(myList[i - 1][j - 1] + myList[i - 1][j])
            myList.append(temp_list)
        return myList
