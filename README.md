Deployment URL:
https://hacker-news-five-omega.vercel.app/

CI set up is from this link:
https://birdeatsbug.com/blog/a-guide-to-continuous-integration-in-next-js

How Snapshot testing works.


root layout..


1. break down to component
2. then visualise different states of your components.
3. connect component together.



1. Server side rendering.
2. Pagination.
3. How to render comments.
4. SWR: We use it for client side data fetch.
5. Improve styling.

components:
1. Navigation bar.
    1.1 Tabs of Navigation bar.
2. News element.
    2.1 Headline
    2.2 Subline
    2.3 Hide button
    2.4 Comments.


Single responsibility principle.    



<Nav>
    <Logo></Logo>
    <NavItems>
        <NavItem/>\
        <NavItem/>
        <NavItem/>
        <NavItem/>
        <NavItem/>
    </NavItems>
</Nav>

<NewsContainer>
    <NewsItem>
        <NewsTitle>
            <NewsTitleHeading/>
            <NewsFrom/>
        </NewsTitle>
        <NewsSubTitle>
            <NewsPoints/>
            <NewsBy/>
            <NewsTime/>
            <NewsHideButton/>
            <NewsComments/>
        </NewsSubTitle>
    <NewsItem>
</NewsContainer>

<NewsHideButton> should control the state of NewsItem.
It would be passed from Root > NewsConatainer > NewsItem.

The topStories api return the array of elements like 500 items.
On the click of more we can change state and fetch more items.