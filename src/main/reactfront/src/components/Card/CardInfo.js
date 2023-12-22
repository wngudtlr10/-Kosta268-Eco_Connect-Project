import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Button = styled.button`
  background-color: lightgreen;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserCard = ({ user }) => {
    return (
        <CardContainer>
            <ProfileSection>
                <UserImage src={user.imageUrl} alt="user profile" />
                <UserInfo>
                    <h3>{user.nickname}</h3>
                    <p>{user.position}</p>
                    <div>
                        <span>{user.amountHeld} WON</span>
                        <span>{user.points} P</span>
                    </div>
                </UserInfo>
            </ProfileSection>
            <UserDetails>
                <Button>Sponsorship List</Button>
                <Button>My Page</Button>
            </UserDetails>
        </CardContainer>
    );
};

export default UserCard;
