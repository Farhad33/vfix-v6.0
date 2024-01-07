import Container from '@/components/Container'
import HomePageBox from '@/components/HomePageBox'
import HomeTopSection from '@/components/HomeTopSection'

export const metadata = {
  title: "VFix",
  description: "VFix",
}

export default function HomePage() {
  return (
    <Container column center>
      <HomeTopSection />
      <HomePageBox
        title='Data Structure and Algorithm'
        img='/algorithm.svg'
        link='/algorithms'
        description='This section contians a collection of Data Structures and Algorithms that I have worked on recently.'
      />
      <HomePageBox
        title='Interview Questions'
        img='/interview.svg'
        link='/interviews'
        description='Here I have a collection of interview questions for frontend as well as backend.'
      />
      <HomePageBox
        title='Data Structure and Algorithm'
        img='/algorithm.svg'
        link='/algorithms'
        description='This section contians a collection of Data Structures and Algorithms that I have worked on recently.'
      />
      <HomePageBox
        title='Interview Questions'
        img='/interview.svg'
        link='/interviews'
        description='Here I have a collection of interview questions for frontend as well as backend.'
      />
      <HomePageBox
        title='Data Structure and Algorithm'
        img='/algorithm.svg'
        link='/algorithms'
        description='This section contians a collection of Data Structures and Algorithms that I have worked on recently.'
      />
      <HomePageBox
        title='Interview Questions'
        img='/interview.svg'
        link='/interviews'
        description='Here I have a collection of interview questions for frontend as well as backend.'
      />
      <HomePageBox
        title='Data Structure and Algorithm'
        img='/algorithm.svg'
        link='/algorithms'
        description='This section contians a collection of Data Structures and Algorithms that I have worked on recently.'
      />
      <HomePageBox
        title='Interview Questions'
        img='/interview.svg'
        link='/interviews'
        description='Here I have a collection of interview questions for frontend as well as backend.'
      />
    </Container>
  )
}