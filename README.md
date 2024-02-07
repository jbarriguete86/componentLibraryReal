Welcome to this component library app

The purpose of this app is to have a reusable set of different components ready to go in case of needing them. I have made the following:

1) Menu: with a dropdown button

2) Badge: You will see 2 badges, 1 is static and the other is wrapped inside a button so you can test the different modes of the badges. The have 2 forms either pill(with rounded borders) or square. they come in different color: gray,red,yellow,green,blue, indigo, purple, pink. To use this you will need add the following <Badge form={add form} variant={add variant}>text </Badge>. If you decide to leave it without values it will default to square gray

3)Banner: This will have 4 variants: success, warning, error, neutral. When using this if you just want a single line, don't input the <Banner.Text>. leaving the Banner without a variant will default to neutral. To add the element you will have the following:
<Banner variant={add the variant state}>
<Banner.Title/> --> 4 different default messages depending on the variant
<Banner.Text>text<Banner.Text>
</>

4)Card: This is to create good looking card to put information. It has a hover state.

5)Testimonial: This element will have 2 forms: with picture of with logo, not adding a variant will default to logo design. It also is responsive.To add this element you will need to write the following:
<Testimonial variant={variant}>
    <Testimonial.Image>image src</Testimonial.image>
    <Testimonial.Main>
        <Testimonial.Text>text<Testimonial.text>
        <Testimonial.Footer>
            <Testimonial.Name>text</Testimonial.Name>
            <Testimonial.Position>text</Testimonial.Position>
        </Testimonial.Footer>
    </Testimonial.Main>
</Testimonial>

6)Tooltip: this is a nice tooltip with 2 styles bold or light and 4 types default, purple, blue, green. Not puting any style or type will default to bold default, inputing only the light style will be the light default. To use this component you will need the following:
<Tooltip>
    <Tooltip.Element type={type} style={style}>
        <Tooltip.ContentContainer >
            <Tooltip.TextContainer>
                <Tooltip.Title>text</Tooltip.Title>
                 <Tooltip.Text>text</Tooltip.Text>
            </Tooltip.TextContainer>
        </Tooltip.ContentContainer>
    </Tooltip.Element>
    <Tooltip.Trigger>React component that will trigger the tooltip</Tooltip.Trigger>
</Tooltip>

For this app I have input some buttons and some custom hooks just for the reviewer to check each one of the variant, types, forms and styles
