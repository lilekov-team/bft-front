import { cleanup, render, screen } from "@testing-library/react"
import { ScrollableContainer } from "../../../../src/components/Atoms/ScrollableContainer/scrollable-container"

describe("scrollable container", () => {
    
    beforeEach(() => {
        render(<ScrollableContainer
            maxHeight={"25rem"}
            width={"20rem"}
            
            children={
                <div aria-label="test-label">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae molestie dui. Nam tincidunt orci quis lobortis maximus. In ac commodo risus, ut euismod arcu. Aliquam erat volutpat. Quisque interdum justo non mauris condimentum maximus. Cras ultrices ex at feugiat dictum. Etiam id euismod velit.

                    </p>
                    <p>
                        Nam suscipit congue felis vitae sodales. Fusce pharetra enim ac sem ullamcorper, ac commodo odio interdum. Aliquam eu purus congue diam finibus tincidunt id ac lectus. Integer tempor scelerisque laoreet. Pellentesque fermentum consequat leo, a pharetra tellus lobortis sed. Fusce et faucibus lacus, vel dapibus tortor. Nunc eu ultricies ante, laoreet lobortis massa. Donec ornare sapien in commodo viverra. Ut bibendum efficitur mi at feugiat. Aliquam sit amet augue sit amet augue hendrerit suscipit. Phasellus arcu mi, dignissim vitae tempus a, malesuada in augue. Quisque varius, odio id luctus consequat, odio dui blandit quam, laoreet vehicula turpis nunc sit amet diam. Fusce risus dui, auctor nec dictum non, scelerisque non arcu. Etiam pharetra fringilla felis in bibendum. Proin mattis est ut efficitur eleifend.

                    </p>
                    <p>

                        Duis varius porttitor lorem, sed laoreet metus viverra vitae. Morbi sed lorem ullamcorper, auctor urna id, mattis elit. Nullam ullamcorper imperdiet turpis quis aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ac sem eget metus rhoncus vulputate. Cras luctus tortor nec nisi semper faucibus. Suspendisse congue nulla ut velit elementum, sit amet congue leo pharetra. Pellentesque sapien sem, vestibulum vitae neque at, bibendum scelerisque magna. Proin placerat nec diam bibendum condimentum. Praesent in felis vitae nibh vehicula tincidunt. Nam viverra nec turpis eget venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec odio magna, rutrum eu sem ut, aliquet consectetur tortor. Nullam fermentum pellentesque pellentesque. Ut posuere arcu diam, vitae rhoncus eros elementum ut.
                    </p>
                    <p>

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In gravida venenatis risus vitae pulvinar. Mauris elementum molestie eros sed convallis. Duis sit amet ante augue. Donec non lacus ac justo laoreet luctus sit amet non lectus. Vivamus elementum cursus elementum. Sed mollis nulla id lacus egestas, quis euismod sem placerat. Aenean rutrum nisl id blandit sodales.
                    </p>
                    <p>
                        Vivamus blandit consectetur felis, ut accumsan urna ultrices et. Donec mollis, enim vitae imperdiet accumsan, lorem urna volutpat turpis, in congue ipsum diam eget enim. Etiam mollis in nisi pulvinar efficitur. Mauris mauris mi, lobortis ac lorem a, mattis tristique massa. Aliquam et ex libero. Fusce faucibus, nibh sit amet hendrerit suscipit, enim dolor volutpat orci, a convallis magna risus eu libero. Duis fringilla tincidunt ornare.

                    </p>
                </div>
            }
        />)
    })

    afterEach(() => {
        cleanup()
    })
    
    it("renders container", () => {

        


        expect(screen.getByLabelText("test-label")).toBeInTheDocument()

    })


    it("correctly passes maxHeight attribute", () => {
  
        expect(screen.getByLabelText("test-label").parentElement?.parentElement).toHaveStyle("max-height: 25rem")
    })


    it("correctly passes width attribute", () => {
  
        expect(screen.getByLabelText("test-label").parentElement?.parentElement).toHaveStyle("width: 20rem")
    })
})