students = %w(Ainkaran Allain Amir Colin Devansh Jackie Kyle Michael Mohammed Ozge Roy
 Samuel Sanny Shaggy Jacky Sid Srinivas)

result = []

students.each do |student|
  result << student.length
end

print result

new_result = students.map { |student| student.length }
print new_result

fancy_result = students.map(&:length)
print fancy_result
