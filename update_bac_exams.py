import json
import re
import os

with open('bac_exams.json', 'r', encoding='utf-8') as f:
    files = json.load(f)

track_map = {
    "شعبة اداب و فلسفة": "Literature",
    "شعبة تسيير و اقتصاد": "Management",
    "شعبة تقني رياضي": "Technical Math",
    "شعبة رياضيات": "Math",
    "شعبة علوم تجريبية": "Sciences",
    "شعبة لغات اجنبية": "Languages"
}

subject_map = {
    "اسلامية": "Islamic Studies",
    "انجليزية": "English",
    "تاريخ و جغرافيا": "History & Geography",
    "رياضيات": "Math",
    "عربية": "Arabic",
    "فرنسية": "French",
    "فلسفة": "Philosophy",
    "الاقتصاد و المانجمنت": "Economics",
    "التسيير المحاسبي والمالي": "Accounting",
    "قانون": "Law",
    "فيزياء": "Physics",
    "هندسة كهربائية": "Electrical Engineering",
    "هندسة مدنية": "Civil Engineering",
    "علوم": "Science",
    "ايطالية": "Third Language"
}

grouped = {}

for file in files:
    parts = file.split('/')
    if len(parts) >= 4:
        track_ar = parts[2]
        subject_ar = parts[3]
        filename = parts[-1]
        
        track = track_map.get(track_ar)
        subject = subject_map.get(subject_ar)
        
        if not track or not subject:
            continue
            
        key = f"3AS-{track}-{subject}"
        if key not in grouped:
            grouped[key] = []
            
        # extract year from filename (4-digit year 20xx)
        year_match = re.search(r'20(2[0-9])', filename)
        year = f"20{year_match.group(1)}" if year_match else None
        
        grouped[key].append({
            "id": filename.replace('.pdf', '').replace(' ', '-'),
            "year": year,
            "url": file,
        })

js_code = "// AUTO INJECTED BAC EXAMS\n"

for key, exams in grouped.items():
    js_code += f"if (!RESOURCES['{key}']) RESOURCES['{key}'] = {{ channels: [], lessons: [], exercises: [], exams: [], summaries: [] }};\n"
    js_code += f"RESOURCES['{key}'].exams.push(...[\n"
    # Sort: files with year first (by year), then unnamed ones
    with_year = sorted([e for e in exams if e['year']], key=lambda x: x['year'])
    without_year = [e for e in exams if not e['year']]
    
    # Give sequential numbering to those without a year
    counter = 1
    for ex in with_year:
        title = f"موضوع بكالوريا {ex['year']}"
        js_code += f"  {{ id: \"{ex['id']}\", title: \"{title}\", desc: \"موضوع البكالوريا الرسمي\", date: \"{ex['year']}\", url: \"{ex['url']}\" }},\n"
    for ex in without_year:
        title = f"موضوع بكالوريا رقم {counter}"
        js_code += f"  {{ id: \"{ex['id']}\", title: \"{title}\", desc: \"موضوع البكالوريا\", date: \"بكالوريا\", url: \"{ex['url']}\" }},\n"
        counter += 1
    js_code += "]);\n"

# Replace in app.js
with open('app.js', 'r', encoding='utf-8') as f:
    app_content = f.read()

start_marker = "// AUTO INJECTED BAC EXAMS"
end_marker = "// ROUTER — reads URL params and initializes the correct page"

start_idx = app_content.find(start_marker)
end_idx = app_content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_content = app_content[:start_idx] + js_code + "\n" + app_content[end_idx:]
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"app.js updated. {sum(len(v) for v in grouped.values())} exams injected across {len(grouped)} keys.")
else:
    print("Markers not found in app.js")
