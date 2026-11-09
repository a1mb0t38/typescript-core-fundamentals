const multiplyValue = (value: number, multiplier?: number): number => {
    if(multiplier){
        return value * multiplier;
    }else if(multiplier === 0){
        return value * multiplier;
    }else{
        return value * 2;
    }
}


const processInput=(input: string | number | boolean): number | string => {
    if(typeof input === "string"){
        return input.trim().toLowerCase();
    }else if(typeof input === "number"){
        return (input * 10);
    }else if(typeof input === "boolean"){
        if(input === true){
            return "Active";
        }else{
            return "Inactive";
        }
    }
    return input;
}



const formatCoordinate =([latitude, longitude, locationName]: readonly [number, number, string]): string => {
    return `Location: ${locationName} (${latitude}, ${longitude})`
}


const concatenateArrays=<T>(...arrays:T[][]): T[] => {
    return ([] as T[]).concat(...arrays)
}



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];
const getPopularCourses=(course: Course[], minStudents: number): Course[] => {
    
    return course.filter(course => course.isPublished && course.students >= minStudents)
    
}




interface User {
    id: number;
    name: string;
    role: string;
}
const users: User[] = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

const pluckValues=<T,K extends keyof T>(iteam:T[], key:K): T[K][] => {
    return iteam.map(item => item[key])
}





class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}



const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if(age >= 18){
            setTimeout(() => resolve("Access Granted"), 1000);
        }else{
            reject(new Error("Access Denied: Age must be 18 or older"));
        }
    })
}

