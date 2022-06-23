import { SVGProps } from "react"







export const Search: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return <svg  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10.7554 18.6769C15.5909 18.6769 19.5108 14.9437 19.5108 10.3385C19.5108 5.73326 15.5909 2 10.7554 2C5.91992 2 2 5.73326 2 10.3385C2 14.9437 5.91992 18.6769 10.7554 18.6769Z" stroke={props.color ?? "#A4A4A4"} strokeWidth="2.43" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 22L16.9423 16.2308" stroke={props.color ?? "#A4A4A4"} strokeWidth="2.43" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

}
