
n = int(input("Enter no:of subjects: "))
m = int(input("Enter no:of labs: "))
subject_grades = ["Ex", "A", "B", "C", "D", "E"]
subject_grade_points = [10, 9, 8, 7, 6, 5]
user_subject_grades = []
user_labs_grades = []
user_points = []
for i in range(n):
    grade = input("Enter subject grade: ")
    user_subject_grades.append(grade)

for i in range(m):
    lab_grade = input("Enter lab grade: ")
    user_labs_grades.append(lab_grade)

for j in range(n):
    user_element = user_subject_grades[j]
    index = subject_grades.index(user_element)
    score = subject_grade_points[index]*3
    user_points.append(score)

for j in range(m):
    user_element = user_labs_grades[j]
    index = subject_grades.index(user_element)
    score = subject_grade_points[index]*2
    user_points.append(score)

total_points = 0
for k in range(m+n):
    total_points = total_points+user_points[k]

print("Total points: ", total_points/21.0)
    



