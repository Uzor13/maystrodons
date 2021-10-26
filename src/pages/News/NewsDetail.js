import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 0 2rem;
`

const Img = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`

const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
`

const NewsHeaderSub = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
`

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding-right: 1rem;
`

const NewsDetail = ({data}) => {
    return (
        <Container key={data.id}>
            <Img src={data.image_url} alt="" className="img-fluid"/>
            <NewsHeader>
                <h1>{data.title}</h1>
                <NewsHeaderSub>
                    <Subtitle>
                        <i className="fas fa-user"/>
                        <p>{data.author_name}</p>
                    </Subtitle>
                    <Subtitle>
                        <i className="fas fa-calendar"/>
                        <p>{data.date}</p>
                    </Subtitle>
                    <Subtitle>
                        <i className="fas fa-clock"/>
                        <p>{data.time}</p>
                    </Subtitle>

                </NewsHeaderSub>
            </NewsHeader>
            <div>
                <p>{data.news_content}</p>
            </div>
        </Container>
    );
};

export default NewsDetail;
